"use client";

import React, {useState} from "react";
import YellowBg from "../../../../public/assets/img/shape/yellow-bg.png";
import Image from "next/image";
import Link from "next/link";
import courses_data from "@/data/courses-data";
import CourseItem from "./CourseItem";
import {Course} from "@/interface";

interface Props {
  courses: Course[];
}

const CourseSectionOne = ({ courses }: Props) => {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <section className="course__area pt-115 pb-120 grey-bg">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="section__title-wrapper mb-60">
              <h2 className="section__title">
                Find the Right <br /> Fitness{" "}
                <span className="yellow-bg yellow-bg-big">
                  Trainer
                  <Image
                    src={YellowBg}
                    style={{ width: "auto", height: "auto" }}
                    alt="image not found"
                  />
                </span>{" "}
                for you
              </h2>
              <p>
                You {`don't`} have to struggle alone, {`you've`} got our
                assistance and help.
              </p>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
            <div className="category__more mb-50 float-md-end fix">
              <Link href="/course-grid" className="link-btn">
                View all
                <i className="fas fa-arrow-right"></i>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {activeCategory === "" ? (
            <>
              {courses.map((course) => (
                <CourseItem key={course.id} course={course} />
              ))}
            </>
          ) : (
            <>
              {courses.map((item) => (
                <div
                  key={item.id}
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                >
                  <div className="course__item white-bg mb-30 fix">
                    <div className="course__thumb w-img p-relative fix">
                      <Link href={`/course-details/${item.id}`}>
                        <Image
                          src={item.thumbnail}
                          style={{ width: "100%", height: "auto" }}
                          alt="image not found"
                        />
                      </Link>
                      <div className="course__tag">
                        <Link
                          href={`/course-details/${item.id}`}
                          // className={
                          //   item.categoryClass ? `${item.categoryClass}` : ""
                          // }
                        >
                          {'item.category'}
                        </Link>
                      </div>
                    </div>
                    <div className="course__content">
                      <div className="course__meta d-flex align-items-center justify-content-between">
                        <div className="course__lesson">
                          <span>
                            <i className="fas fa-book"></i>
                            {/*{item.lesson} Lesson*/}
                          </span>
                        </div>
                        <div className="course__rating">
                          <span>
                            <i className="fas fa-star"></i>
                            {item.ratings.rating} ({item.ratings.participants})
                          </span>
                        </div>
                      </div>
                      <h3 className="course__title">
                        <Link href={`/course-details/${item.id}`}>
                          {item.name}
                        </Link>
                      </h3>
                      <div className="course__teacher d-flex align-items-center">
                        <div className="course__teacher-thumb mr-15">
                          <Image
                            src={item.resourcePerson.profileImage}
                            style={{ width: "auto", height: "auto" }}
                            alt="image not found"
                          />
                        </div>
                        <h6>
                          <Link href="/instructor-details">{item.resourcePerson.name}</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="course__more d-flex justify-content-between align-items-center">
                      <div className="course__status">
                        <span
                          // className={item.priceClass ? item.priceClass : ""}
                        >
                          {item.price === 0 ? "Free" : `$${item.price}.00`}
                        </span>
                        <span className="old-price">
                          {item.previousPrice === 0 ? " " : `$${item.previousPrice}`}
                        </span>
                      </div>
                      <div className="course__btn">
                        <Link
                          href={`/course-details/${item.id}`}
                          className="link-btn"
                        >
                          Know Details
                          <i className="fas fa-arrow-right"></i>
                          <i className="fas fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseSectionOne;
