import React, { Suspense } from 'react'
import LazyLoader from '../components/masterLayout/LazyLoader'
import MasterLayout from '../components/masterLayout/MasterLayout'

const DashboardPage = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader/>}>
        <h1>Dashboard Page</h1>
        </Suspense>
      </MasterLayout>
    </>
  )
}

export default DashboardPage