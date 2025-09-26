(function() {
    const { registerBlockType } = wp.blocks;
    const { Fragment } = wp.element;
    const { InspectorControls, useBlockProps } = wp.blockEditor;
    const { PanelBody, RangeControl, ColorPalette } = wp.components;
    const { __ } = wp.i18n;
    const { useSelect } = wp.data;

    // Define theme colors matching your screenshot
    const themeColors = [
        { name: 'White', slug: 'white', color: '#ffffff' },
        { name: 'Black', slug: 'black', color: '#000000' },
        { name: 'Orange', slug: 'orange', color: '#d64c00' },
        { name: 'Pink', slug: 'pink', color: '#e091b8' },
        { name: 'Purple', slug: 'purple', color: '#4f46e5' },
        { name: 'Gray', slug: 'gray', color: '#6b7280' },
        { name: 'Light Gray', slug: 'light-gray', color: '#f3f4f6' },
        { name: 'Dark Pattern', slug: 'pattern', color: '#333333' }
    ];

    registerBlockType('scroll-progress-bar/progress-bar', {
        title: __('Scroll Progress Bar', 'scroll-progress-bar'),
        description: __('A progress bar that shows scroll position at the top of the page.', 'scroll-progress-bar'),
        icon: 'chart-line',
        category: 'widgets',
        attributes: {
            height: {
                type: 'number',
                default: 4
            },
            color: {
                type: 'string',
                default: '#007cba'
            },
            backgroundColor: {
                type: 'string',
                default: 'rgba(0,0,0,0.1)'
            }
        },

        edit: function(props) {
            const { attributes, setAttributes } = props;
            const { height, color, backgroundColor } = attributes;
            const blockProps = useBlockProps();

            return React.createElement(
                Fragment,
                null,
                React.createElement(
                    'div',
                    blockProps,
                    React.createElement(
                        'div',
                        {
                            style: {
                                padding: '20px',
                                border: '2px dashed #ccc',
                                borderRadius: '4px',
                                textAlign: 'center',
                                backgroundColor: '#f9f9f9'
                            }
                        },
                        React.createElement(
                            'div',
                            { style: { fontSize: '16px', marginBottom: '10px' } },
                            '📊 Scroll Progress Bar'
                        ),
                        React.createElement(
                            'div',
                            {
                                style: {
                                    height: height + 'px',
                                    backgroundColor: backgroundColor,
                                    borderRadius: '2px',
                                    overflow: 'hidden',
                                    margin: '10px auto',
                                    maxWidth: '200px'
                                }
                            },
                            React.createElement('div', {
                                style: {
                                    height: '100%',
                                    width: '60%',
                                    backgroundColor: color,
                                    transition: 'width 0.1s ease'
                                }
                            })
                        ),
                        React.createElement(
                            'small',
                            { style: { color: '#666' } },
                            `Height: ${height}px • Preview (60% progress)`
                        )
                    )
                ),
                React.createElement(
                    InspectorControls,
                    null,
                    React.createElement(
                        PanelBody,
                        {
                            title: __('Progress Bar Settings', 'scroll-progress-bar'),
                            initialOpen: true
                        },
                        React.createElement(RangeControl, {
                            label: __('Height (px)', 'scroll-progress-bar'),
                            value: height,
                            onChange: (value) => setAttributes({ height: value }),
                            min: 1,
                            max: 20,
                            step: 1,
                            allowReset: true,
                            resetFallbackValue: 4
                        }),
                        React.createElement(
                            'div',
                            { style: { marginBottom: '16px' } },
                            React.createElement(
                                'div',
                                { style: { marginBottom: '8px', fontWeight: '500', fontSize: '13px' } },
                                __('Progress Color', 'scroll-progress-bar')
                            ),
                            React.createElement(ColorPalette, {
                                colors: themeColors,
                                value: color,
                                onChange: (value) => setAttributes({ color: value || '#007cba' }),
                                clearable: true,
                                disableCustomColors: false
                            })
                        ),
                        React.createElement(
                            'div',
                            { style: { marginBottom: '16px' } },
                            React.createElement(
                                'div',
                                { style: { marginBottom: '8px', fontWeight: '500', fontSize: '13px' } },
                                __('Background Color', 'scroll-progress-bar')
                            ),
                            React.createElement(ColorPalette, {
                                colors: themeColors,
                                value: backgroundColor,
                                onChange: (value) => setAttributes({ backgroundColor: value || 'rgba(0,0,0,0.1)' }),
                                clearable: true,
                                disableCustomColors: false
                            })
                        )
                    )
                )
            );
        },

        save: function() {
            return null; // Dynamic block - rendered by PHP
        }
    });

})();