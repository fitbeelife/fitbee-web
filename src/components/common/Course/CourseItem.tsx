import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { coursesType } from "@/interface/interFace";
import {Course} from "@/interface";

interface Props {
  course: Course;
}

export default function CourseItem({ course }: Props) {
  return (
    <div
    key={course.id}
    className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
  >
    <div className="course__item white-bg mb-30 fix">
      <div className="course__thumb w-img p-relative fix">
        <Link href={`/course-details/${course.id}`}>
          <img
            src={course.thumbnail}
            style={{ width: "100%", height: "auto" }}
            alt="image not found"
          />
        </Link>

        <div className="course__tag">
          {course.tags.map((tag) => (
              <Link
                  key={tag.name}
                  style={{background: tag.color, marginRight: '5px'}}
                  href={`/course-details/${course.id}`}>
                {tag.name}
              </Link>
          ))}
        </div>

      </div>
      <div className="course__content">
        <div className="course__meta d-flex align-items-center justify-content-between">
          <div className="course__lesson">
            <span>
              <i className="far fa-book-alt"></i>
              {course.sessions}
            </span>
          </div>
          <div className="course__rating">
            <span>
              <i className="fas fa-star"></i>
              {course.ratings.rating} ({course.ratings.participants})
            </span>
          </div>
        </div>
        <h3 className="course__title">
          <Link href={`/course-details/${course.id}`}>
            {course.name}
          </Link>
        </h3>
        <div className="course__teacher d-flex align-items-center">
          <div className="course__teacher-thumb mr-15">
            <div>
            <img
              src={course.resourcePerson.profileImage}
              style={{ width: "32", height: "32" }}
              alt="image not found"
            />
            </div>
          </div>
          <h6>
            <Link href="/instructor-details">
              {course.resourcePerson.name}
            </Link>
          </h6>
        </div>
      </div>
      <div className="course__more d-flex justify-content-between align-items-center">
        <div className="course__status d-flex align-items-center">
          <span
            // className={
            //   item.priceClass ? `${item.priceClass}` : ""
            // }
          >
            {!course.previousPrice || course.price === 0
              ? "Free"
              : `$${course.price}.00`}
          </span>
          <span className="old-price">
            {!course.previousPrice || course.previousPrice === 0
              ? " "
              : `$${course.previousPrice}.00`}
          </span>
        </div>
        <div className="course__btn">
          <Link
            href={`/course-details/${course.id}`}
            className="link-btn"
          >
            Know Details
            <i className="far fa-arrow-right"></i>
            <i className="far fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
