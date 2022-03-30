export default {
    title: 'Shoe',
    name: 'shoe',
    type: 'document',

    fields: [
        {
            title: 'Brand Name',
            name: 'brand',
            type: 'string'
        },
        {
            title: 'Shoe Model',
            name: 'model',
            type: 'string'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            title: 'Shoe Size',
            name: 'size',
            type: 'array',
            of: [{ type: 'number' }]
        },
        {
            title: 'Shoe Information',
            name: 'shoeInfo',
            type: 'string'
        },
        {
            title: 'Shoe Price',
            name: 'price',
            type: 'number'
        }
    ]
}