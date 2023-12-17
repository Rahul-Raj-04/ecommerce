import BlogCard from "./Card/BlogCard";
import NewsLetter from "./NewsLetter";
import PageHeader from "./PageHeader/PageHeader";

function Blog() {
  return (
    <>
      <PageHeader
        HeaderTitle="#readmore"
        desc="Read all case studies about our products!"
      />

      <BlogCard
        Image="https://code-with-mj.github.io/E_commerce_website/images/pic10.png"
        title="The cotton jerset zip-up jackets"
      />
      <BlogCard
        Image="https://code-with-mj.github.io/E_commerce_website/images/b10.jpg"
        title="The new Trending T - shirts for Fashion"
      />
      <BlogCard
        Image="https://code-with-mj.github.io/E_commerce_website/images/products/f3.jpg"
        title="Brand New Printed Shirts"
      />
      <BlogCard
        Image="https://code-with-mj.github.io/E_commerce_website/images/n6.jpg"
        title="
Half-Pants for summer"
      />
      <BlogCard
        Image="https://code-with-mj.github.io/E_commerce_website/images/newfootwear.jpeg"
        title="The nike shoes limited"
      />
      <NewsLetter />
    </>
  );
}

export default Blog;
