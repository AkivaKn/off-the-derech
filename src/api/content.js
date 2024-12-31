export const getHomePage = async () => {
  try {
    const response = await fetch(
      "https://strapi-otd.onrender.com/api/home-page?populate[0]=hero&populate[1]=hero.ctas&populate[2]=definition&populate[3]=definition.paragraphs&populate[4]=support&populate[5]=support.paragraphs",
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const getBlogPosts = async () => {
  try {
    const response = await fetch(
      "https://strapi-otd.onrender.com/api/blog-posts?populate[0]=paragraphs",
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const getResourcePage = async () => {
  try {
    const response = await fetch(
      "https://strapi-otd.onrender.com/api/resource-page?populate[0]=resource_categories&populate[1]=resource_categories.resource_subcatgories&populate[2]=resource_categories.resource_subcatgories.resources&populate[3]=resource_categories.resource_subcatgories.resources.link",
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
