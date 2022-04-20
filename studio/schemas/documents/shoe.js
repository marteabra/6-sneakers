export default {
    title: 'Shoe',
    name: 'shoe',
    type: 'document',

    fields: [
        {
            title: 'Brand Name',
            name: 'brand',
            type: 'reference',
            to: [{ type: 'brand' }]
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
            type: 'text'
        },
        {
            title: 'Shoe Price',
            name: 'price',
            type: 'number'
        }
    ]
}