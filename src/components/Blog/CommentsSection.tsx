import { useEffect } from 'react';

interface CommentsSectionProps {
  postId: string;
}

export const CommentsSection = ({ postId }: CommentsSectionProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.commento.io/js/commento.js';
    script.defer = true;
    script.setAttribute('data-auto-init', 'true');
    script.setAttribute('data-id', postId);
    script.setAttribute('data-url', window.location.href);

    const container = document.getElementById('commento');
    container?.appendChild(script);

    return () => {
      container?.removeChild(script);
    };
  }, [postId]);

  return (
    <div className='mt-8'>
      <div id='commento'></div>
    </div>
  );
};
