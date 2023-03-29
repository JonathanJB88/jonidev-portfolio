declare module '@sanity/block-content-to-react' {
  import * as React from 'react';

  export interface BlockContentProps {
    blocks: any[];
    renderContainerOnSingleChild?: boolean;
    serializers?: any;
    className?: string;
    projectId?: string;
    dataset?: string;
    imageOptions?: any;
    useCdn?: boolean;
  }

  export default function BlockContent(props: BlockContentProps): React.ReactElement;
}
