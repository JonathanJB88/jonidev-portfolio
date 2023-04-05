import { render } from '@testing-library/react';
import { blockSerializer, imageSerializer } from '@/utils';

const blockPropsH1 = { node: { _type: 'block', style: 'h1' }, children: 'Test Title', serializers: { types: {} } };
const blockPropsH2 = { node: { _type: 'block', style: 'h2' }, children: 'Test Subtitle', serializers: { types: {} } };
const blockPropsH3 = { node: { _type: 'block', style: 'h3' }, children: 'Test Heading 3', serializers: { types: {} } };
const blockPropsBlockquote = {
  node: { _type: 'block', style: 'blockquote' },
  children: 'Test Blockquote',
  serializers: { types: {} },
};
const blockPropsDefault = {
  node: { _type: 'block', style: 'paragraph' },
  children: 'Test Paragraph',
  serializers: { types: {} },
};

const node = {
  _type: 'image',
  asset: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg',
  alt: 'Test Image',
};

describe('blockSerializer', () => {
  it('should render the correct JSX based on the input', () => {
    const { container: containerH1 } = render(<>{blockSerializer(blockPropsH1)}</>);
    expect(containerH1).toMatchSnapshot();

    const { container: containerH2 } = render(<>{blockSerializer(blockPropsH2)}</>);
    expect(containerH2).toMatchSnapshot();

    const { container: containerH3 } = render(<>{blockSerializer(blockPropsH3)}</>);
    expect(containerH3).toMatchSnapshot();

    const { container: containerBlockquote } = render(<>{blockSerializer(blockPropsBlockquote)}</>);
    expect(containerBlockquote).toMatchSnapshot();

    const { container: containerDefault } = render(<>{blockSerializer(blockPropsDefault)}</>);
    expect(containerDefault).toMatchSnapshot();
  });
});

describe('imageSerializer', () => {
  it('should render the correct JSX based on the input', () => {
    const imageProps = { node };
    const { container } = render(<>{imageSerializer(imageProps)}</>);
    expect(container).toMatchSnapshot();
  });
});
