export default (editor, opt = {}) => {
  let bm = editor.BlockManager;

  if (opt.resetBlocks) {
    bm.getAll().reset();
  }

  const allBlocks = {
    category: opt.categoryLabel,
  };

  bm.add('mj-1-column', {
    label: '1 Column',
    content: `<mj-section>
        <mj-column><mj-text>Content 1</mj-text></mj-column>
      </mj-section>`,
    attributes: { class: 'gjs-fonts gjs-f-b1' },
    ...allBlocks,
  });

  bm.add('mj-2-columns', {
    label: '2 Columns',
    content: `<mj-section>
        <mj-column><mj-text>Content 1</mj-text></mj-column>
        <mj-column><mj-text>Content 2</mj-text></mj-column>
      </mj-section>`,
    attributes: { class: 'gjs-fonts gjs-f-b2' },
    ...allBlocks,
  });

  bm.add('mj-3-columns', {
    label: '3 Columns',
    content: `<mj-section>
        <mj-column><mj-text>Content 1</mj-text></mj-column>
        <mj-column><mj-text>Content 2</mj-text></mj-column>
        <mj-column><mj-text>Content 3</mj-text></mj-column>
      </mj-section>`,
    attributes: { class: 'gjs-fonts gjs-f-b3' },
    ...allBlocks,
  });

  bm.add('mj-text', {
    label: 'Text',
    content: '<mj-text>Insert text here</mj-text>',
    attributes: { class: 'gjs-fonts gjs-f-text' },
    ...allBlocks,
  });

  bm.add('mj-button', {
    label: 'Button',
    content: '<mj-button>Button</mj-button>',
    attributes: { class: 'gjs-fonts gjs-f-button' },
    ...allBlocks,
  });

  bm.add('mj-image', {
    label: 'Image',
    content: '<mj-image src="http://placehold.it/350x250/78c5d6/fff">',
    attributes: { class: 'fa fa-image' },
    ...allBlocks,
  });

  bm.add('mj-divider', {
    label: 'Divider',
    content: '<mj-divider/>',
    attributes: { class: 'gjs-fonts gjs-f-divider'},
    ...allBlocks,
  });

  bm.add('mj-social-group', {
    label: 'Group Social',
    content: `<mj-social font-size="12px" icon-size="24px" border-radius="12px" mode="horizontal">
        <mj-social-element src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-facebook-48.png" href="https://www.facebook.com/tutor.platform.global/?ref=br_rs"></mj-social-element>
        <mj-social-element src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-link-48.png" href="https://www.tutorbot.io/"></mj-social-element>
        <mj-social-element src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-linkedin-48.png" href="https://www.linkedin.com/company/tutor-platform/"></mj-social-element>
      </mj-social>`,
    attributes: { class: 'fa fa-share-alt' },
    ...allBlocks,
  });

  bm.add('mj-spacer', {
    label: 'Spacer',
    content: '<mj-spacer/>',
    attributes: { class: 'fa fa-arrows-v'},
    ...allBlocks,
  });

}
