import React from 'react'
import { authUserSession } from "../../../../Libs/auth-libs";
import prisma from "../../../../Libs/prisma";
import Link from 'next/link';
import Header from '../../../../components/Dashboard/Header';

const page = async () => {
    const user = await authUserSession()
    const comments = await prisma.comment.findMany({where: {user_email: user.email}})

    return (
        <>
            <section className="mt-4 px-4 w-full">
                <Header title={"My Comment"} />
                <div className='grid grid-cols-1 py-2 gap-4'>
                    {comments.map(comment => {
                        return (
                            <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} className='text-color-dark bg-color-primary p-4'>
                                <p className='text-sm'>{comment.anime_title}</p>
                                <p className='italic'>{comment.comment}</p>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default page
