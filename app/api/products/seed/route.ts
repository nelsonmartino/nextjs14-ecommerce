import data from '@/lib/data'
import dbConnect from '@/lib/dbConnect'
import productModel from '@/lib/models/ProductModel'
import userModel from '@/lib/models/UserModel'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { users, products } = data
  await dbConnect()

  await userModel.deleteMany()
  await userModel.insertMany(users)

  await productModel.deleteMany()
  await productModel.insertMany(products)

  return NextResponse.json({
    message: 'Seeded successfully',
    users,
    products,
  })
}
