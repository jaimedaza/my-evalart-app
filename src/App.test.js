import React from 'react';
import { render } from './test-utils';
import { Accordion } from './components/Accordion';
import { FeatureCard } from './components/FeatureCard';

describe('Accordion', () => {
  it('renders accordion items correctly', () => {
    const accordionItems = [
      { title: 'Title 1', description: 'Description 1' },
      { title: 'Title 2', description: 'Description 2' },
    ];

    const { getByText } = render(<Accordion accordionItems={accordionItems} />);

    // Check if title and description of each accordion item are rendered
    expect(getByText('Title 1')).toBeInTheDocument();
    expect(getByText('Description 1')).toBeInTheDocument();
    expect(getByText('Title 2')).toBeInTheDocument();
    expect(getByText('Description 2')).toBeInTheDocument();
  });
});

describe('FeatureCard', () => {
  it('renders image when imageUrl is provided', () => {
    const imageUrl = 'https://example.com/image.jpg';
    const title = 'Title';
    const description = 'Description';

    const { getByAltText, getByText } = render(
      <FeatureCard
        imageUrl={imageUrl}
        title={title}
        description={description}
      />
    );

    // Check if image is rendered with correct alt text
    const imageElement = getByAltText('image alt text');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', imageUrl);

    // Check if title and description are rendered
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });

  it('renders spinner when imageUrl is not provided', () => {
    const title = 'Title';
    const description = 'Description';

    const { getByTestId, getByText } = render(
      <FeatureCard title={title} description={description} imageUrl="" />
    );

    // Check if spinner is rendered
    const spinnerElement = getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();

    // Check if title and description are rendered
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });
});
