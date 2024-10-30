( function() {
  var __ = wp.i18n.__; // The __() for internationalization.
  var el = wp.element.createElement; // The wp.element.createElement() function to create elements.
  var registerBlockType = wp.blocks.registerBlockType; // The registerBlockType() to register wp.blocks.

  registerBlockType( 'msb/share', {

    title: __( 'Share', 'minimal-share-buttons' ),
    description: __( 'Shows Minimal Share Buttons widget with the buttons, set in the plugin settings.', 'minimal-share-buttons' ),
    icon: 'share',
    category: 'widgets',

    attributes: {
      align: {
        type: 'string',
        default: 'none',
      },
      title: {
        type: 'string',
        default: __( 'Share', 'minimal-share-buttons' ),
      }
    },

    edit: function( props ) {
      var isSelected = props.isSelected;

      return [
        isSelected && ( el( wp.blockEditor.BlockControls, {key: "controls"},
          el( wp.blockEditor.BlockAlignmentToolbar, {
            value: props.attributes.align,
            controls: ['left', 'center', 'right'],
            onChange: ( nextAlign ) => {
              props.setAttributes( { align: nextAlign } );
            }
          }),
        )),
        el( wp.blockEditor.InspectorControls, {key: "inspector"},
          el( wp.components.PanelBody, {
              title: __( 'Main Settings', 'minimal-share-buttons' ),
            },
            el( wp.components.TextControl, {
              label: __( 'Title', 'minimal-share-buttons' ),
              type: 'text',
              value: props.attributes.title,
              onChange: function( value ) {
                props.setAttributes( { title: value } );
              }
            })
          ),
        ),
        el( wp.serverSideRender, {
          block: 'msb/share',
          attributes: props.attributes,
        }),
      ];
    },

    save: function( props ) {
      return null;
    },

  });
})();
