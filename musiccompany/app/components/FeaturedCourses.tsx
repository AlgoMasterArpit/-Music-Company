'use client'
import Link from "next/link"
import courseData from "../data/music_courses.json"/* courseData is just variable name it can be any*/
import { BackgroundGradient } from "./ui/background-gradient"
//  humne data ke andar jo file h uske ek object ka data type bnaya ab hum khi bhi
// inhe  usekarege toh we will have access ki iska data type kya h this concept is of typescript

// interface karke hi we define datatype

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
        
}
//  defining data type ka faayda ye h ki if we call api and we want ki description aana hi chahye and nhi aaya h toh we 
//  will see error yhi pe ki api se description nhi aaya h
function FeaturedCourses() {

    //  coursedata we have jis naam se import kia and usme courses me gua , filter use kia instead of map kyuki
    // i  want vhi courses   jisme isFeatured true ho vo hi aaye 
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)


  return (
    <div className="py-12 bg-gray-900">
      {/* div1 */}
        <div>
            {/*  ye neeche vali div has h2 and p */}
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        {/* /*div1end*/ }
        {/* div2 */}
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course)=> (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        //  background gradiend me jo bhi aayega that is card ke andar ka part
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                         
        
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>

        {/* div3 */}

         {/* ye  button ke liye div hai */}
        <div className="mt-20 text-center">
            <Link href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
            View All courses
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses