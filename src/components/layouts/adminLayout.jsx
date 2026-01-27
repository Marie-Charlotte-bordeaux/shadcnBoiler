import React from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export const AdminLayout = () => {
  return (
    <div className='flex flex-col items-center  gap-4 p-4 w-full'>
        <div className='flex items-center justify-between gap-4'>
            <Button asChild>
                <Link to="/">
                <ArrowLeft />
                Retour à la page d'accueil</Link>
            </Button>
        </div>
        <Outlet />
    </div>
  )
}
