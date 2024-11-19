export const sortOptions = [
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'red', label: 'Red', checked: false },
            { value: 'blue', label: 'Blue', checked: true },
            { value: 'yellow', label: 'Yellow', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'black', label: 'Black', checked: false },
        ],
    },

    {
        id: 'size',
        name: 'Size',
        options: [
            { value: 'm', label: 'M', checked: false },
            { value: 'l', label: 'L', checked: false },
            { value: '2l', label: '2L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
]
export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "159 To 399" },
            { value: "399-999", label: "399 To 999" },
            { value: "999-1999", label: "999 To 1999" },
            { value: "1999-2999", label: "1999 To 2999" },
            { value: "3999-4999", label: "3999 To 4999" },
        ]
    },
    {
        id: "discount",
        name: "Disccount Range",
        options: [
            { value: "10", label: "10% And Above" },
            { value: "20", label: "20% And Above" },
            { value: "30", label: "30% And Above" },
            { value: "40", label: "40% And Above" },
            { value: "50", label: "50% And Above" },
            { value: "60", label: "60% And Above" },
            { value: "80", label: "80% And Above" },
        ]
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "inStock", label: "In Stock" },
            { value: "out_of_Stock", label: "Out of Stock" },
        ]
    }
]