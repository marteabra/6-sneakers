export default {
    title: 'Shoes',
    name: 'shoes',
    type: 'document',

    fields: [
        {
            title: 'Shoes',
            name: 'shoes',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'shoe' }]
            }]
        },

    ]
}