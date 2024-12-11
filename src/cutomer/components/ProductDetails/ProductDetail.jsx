import { useEffect, useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { Box, Button, Grid, LinearProgress, Rating } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import { mens_kurta } from '../../../Data/Mens_kurta'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProductById } from '../../../State/Product/Action'
import { addItemToCart } from '../../../State/Cart/Action'

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },

    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [selectedSize, setSelectedSize] = useState("")
    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()
    const { products } = useSelector(store => store)


    const handleAddToCart = () => {
        const data = { productId: params.productId, size: selectedSize.name }
        dispatch(addItemToCart(data))
        navigate("/cart")
    }

    useEffect(() => {
        dispatch(findProductById(params.productId))
    }, [params.productId])

    return (
        <div className="bg-white lg:px-20">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={products?.product?.imageUrl} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {products?.product?.title}
                            </a>
                        </li>
                    </ol>
                </nav>

                <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>

                    {/* Image gallery */}
                    <div className="flex flex-col items-center">
                        <div className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                            <img
                                src={products?.product?.imageUrl}
                                alt={products.images}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-wrap space-x-5 justify-center ">

                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem]">
                                <img
                                    src={products?.product?.imageUrl}
                                    alt={products?.product?.title}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Product info */}
                    <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7x1 lg:px-8
                    lg:pb-24">
                        <div className="lg:col-span-2" >
                            <h1 className='text-lg lg:text-xl font-semibold text-gray-900'>{products?.product?.brand}</h1>
                            <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                                {products?.product?.title}
                            </h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0" >
                            <h2 className="sr-only">Product information</h2>
                            <div className=" flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                                <p className='font-semibold'> ₹{products?.product?.discountedPrice}</p>
                                <p className='text-gray-900 opacity-50 line-through'> ₹{products?.product?.price}</p>
                                <p className='font-semibold text-green-600'>{products?.product?.discountedPercent}% Off</p>

                            </div>

                            {/* Reviews */}
                            <div className='flex items-center'>
                                <Rating name="read-only" value={3.4} readOnly />
                                <p className='opacity-50 text-sm ml-3'> 5467 Ratings</p>
                                <p className='text-sm font-medium text-indigo-600 ml-3 hover:text-indigo-500'> 215 reviews</p>
                            </div>


                            <form className="mt-10">
                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>

                                    </div>

                                    <fieldset aria-label="Choose a size" className="mt-4">
                                        <RadioGroup
                                            value={selectedSize}
                                            onChange={setSelectedSize}
                                            className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                                        >
                                            {products?.product?.sizes?.map((size) => (
                                                <Radio
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.quantity}
                                                    className={classNames(
                                                        size.quantity
                                                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                        'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6',
                                                    )}
                                                >
                                                    <span>{size.name}</span>
                                                    {size.quantity ? (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                                                        />
                                                    ) : (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                viewBox="0 0 100 100"
                                                                preserveAspectRatio="none"
                                                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                            >
                                                                <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                            </svg>
                                                        </span>
                                                    )}
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>
                                </div>

                                <Button sx={{
                                    color: "white", px: "2rem", py: "1rem", marginTop: "10px", bgcolor: '#9155fd',
                                    '&:hover': {
                                        bgcolor: '#7a47e5',
                                    },
                                }}
                                    onClick={handleAddToCart}>
                                    Add to Cart
                                </Button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{products?.product?.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* rating and reviews */}
                <section>
                    <h1 className='font-semibold text-lg pb-4'>Recent Review & Rating</h1>
                    <div className='border p-5'>
                        <Grid container spacing={7}>
                            <Grid item xs={7}>
                                <div className='space-y-5'>
                                    {[1, 1, 1].map((item) => <ProductReviewCard />)}
                                </div>
                            </Grid>
                            <Grid items xs={5} style={{ marginTop: "15px" }}>
                                <h1 className='text-xl font-semibold pb-2 mt-10'>Product Ratings</h1>
                                <div className='flex items-center space-x-3'>
                                    <Rating value={4.4} name='half-rating' readOnly precision={.5} />
                                    <p className='opacity-60'>8478 Ratings</p>
                                </div>
                                <Box className="mt-5">
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p>Excellent</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant='determinate' value={40} color="success"></LinearProgress>
                                        </Grid>
                                        <p>19259</p>
                                    </Grid>
                                </Box>

                                <Box className="mt-5">
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p>Very Good</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant='determinate' value={30} color="success"></LinearProgress>
                                        </Grid>
                                        <p>14567</p>
                                    </Grid>
                                </Box>

                                <Box className="mt-5">
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p>Good</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{
                                                bgcolor: "#d0d0d0", borderRadius: 4, height: 7, "& .MuiLinearProgress-bar": {
                                                    backgroundColor: "#ffd633",
                                                }
                                            }} variant='determinate' value={25}></LinearProgress>
                                        </Grid>
                                        <p>8786</p>
                                    </Grid>
                                </Box>

                                <Box className="mt-5">
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p>Avarage</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{
                                                bgcolor: "#d0d0d0", borderRadius: 4, height: 7, "& .MuiLinearProgress-bar": {
                                                    backgroundColor: "#734d26",
                                                },
                                            }} variant='determinate' value={20}></LinearProgress>
                                        </Grid>
                                        <p>4567</p>
                                    </Grid>
                                </Box>

                                <Box className="mt-5">
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p>Poor</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant='determinate' value={10} color="error"></LinearProgress>
                                        </Grid>
                                        <p>1245</p>
                                    </Grid>
                                </Box>

                            </Grid>
                        </Grid>
                    </div>
                </section>
                {/* similer products */}
                <section>
                    <h1 className='py-5 text-xl font-bold'>Similer Products</h1>
                    <div className='flex flex-wrap space-y-5 justify-center items-center'>
                        {mens_kurta.map((item) => <HomeSectionCard product={item} />)}

                    </div>
                </section>
            </div>
        </div>
    )
}

