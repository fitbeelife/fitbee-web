import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { coursesType } from "@/interFace/interFace";

export default function CourseItem({ item }: { item: coursesType }) {
  return (
    <div
    key={item.id}
    className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
  >
    <div className="course__item white-bg mb-30 fix">
      <div className="course__thumb w-img p-relative fix">
        <Link href={`/course-details/${item.id}`}>
          <Image
            src={item.image}
            style={{ width: "100%", height: "auto" }}
            alt="image not found"
          />
        </Link>
        <div className="course__tag">
          <Link
            href={`/course-details/${item.id}`}
            className={
              item.categoryClass
                ? `${item.categoryClass}`
                : ""
            }
          >
            {item.category}
          </Link>
        </div>
      </div>
      <div className="course__content">
        <div className="course__meta d-flex align-items-center justify-content-between">
          <div className="course__lesson">
            <span>
              <i className="far fa-book-alt"></i>
              {item.lesson} Session(s)
            </span>
          </div>
          <div className="course__rating">
            <span>
              <i className="fas fa-star"></i>
              {item.ratingAve} ({item.ratingCount})
            </span>
          </div>
        </div>
        <h3 className="course__title">
          <Link href={`/course-details/${item.id}`}>
            {item.title}
          </Link>
        </h3>
        <div className="course__teacher d-flex align-items-center">
          <div className="course__teacher-thumb mr-15">
            <Image
              src={item.tutorImg}
              style={{ width: "auto", height: "auto" }}
              alt="image not found"
            />
          </div>
          <h6>
            <Link href="/instructor-details">
              {item.author}
            </Link>
          </h6>
        </div>
      </div>
      <div className="course__more d-flex justify-content-between align-items-center">
        <div className="course__status d-flex align-items-center">
          <span
            className={
              item.priceClass ? `${item.priceClass}` : ""
            }
          >
            {item.price === 0
              ? "Free"
              : `$${item.price}.00`}
          </span>
          <span className="old-price">
            {item.oldPrice === 0
              ? " "
              : `$${item.oldPrice}.00`}
          </span>
        </div>
        <div className="course__btn">
          <Link
            href={`/course-details/${item.id}`}
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
