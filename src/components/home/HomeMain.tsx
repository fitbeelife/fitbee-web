"use client"

import React, {useEffect, useState} from "react";
import HeroSectionOne from "./HeroSectionOne";
import CategorySection from "./CategorySection";
import CourseSectionOne from "../common/Course/CourseSectionOne";
import EventSection from "./EventSection";
import CtaSection from "./CtaSection";
import { getHomePageComponents} from "@/components/home/action";
import {Category, Course} from "@/interface";

const HomeMain = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [featuredCourses, setFeaturedCourses] = useState<Course[]>([]);

    useEffect(() => {
        async function fetchData() {
            return await getHomePageComponents();
        }
        fetchData().then(components => {
            const categories = components.find(c => c.componentType === 'categories');
            setCategories(categories?.items as Category[]);

            const featuredCourses = components.find(c => c.componentType === 'featured-courses-grid');
            setFeaturedCourses(featuredCourses?.items as Course[]);
        })
    }, []);

  return (
    <>
      <HeroSectionOne />
      <CategorySection categories={categories} />
      {/*<BannerSection />*/}
      <CourseSectionOne courses={featuredCourses} />
      {/*<EventSection />*/}
      {/* <PriceSectionOne /> */}
      <CtaSection />
    </>
  );
};

export default HomeMain;
