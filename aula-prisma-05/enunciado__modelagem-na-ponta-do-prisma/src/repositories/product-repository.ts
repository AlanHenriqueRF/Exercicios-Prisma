import prisma from "../database/database";

const TABLE_NAME = "products";

async function getProducts() {
  const products = await prisma.product.findMany()
  return products
}

async function getProduct(id: number) {
  const prodruct = await prisma.product.findUnique({where:{id}})
  return prodruct
}

async function createProduct(product) {
  await prisma.product.create({
    data:product
  })
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;