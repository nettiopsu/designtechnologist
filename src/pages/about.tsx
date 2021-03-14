import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About the author" />
      <h1>About the author</h1>
      <p>
        Hello, I'm Konstantin.{" "}
        <b>Not a pure developer, but neither a designer. 🙌</b>
      </p>
      <p>
        <b>I know how it feels</b>. Design Technologist, UX Developer, Creative
        Technologist... <b>It has many names</b>, and{" "}
        <b>I have battled for many years</b> to understand who I am - at work,
        in my own projects, at University. <b>I could give up...</b>
      </p>
      <p>
        <b>But I did not.</b> Instead, I researched and collected data from
        various sources and <b>wrote the handbook</b> that you can read here. I
        felt that I needed to help others, who struggle with the same questions:
        who they are, what is their job title, and how to find their dream job.
        My aim is also to <b>increase the awareness of employers</b> about how
        Design Technologists can help their business.
      </p>
      <p>
        I'm a multidisciplinary Design Technologist, passionate about software
        development, Human-Computer Interaction, modern design, and
        accessibility, in which I have over 14 years of experience.
      </p>
      <p>
        As a Design Technologist, I like to work at the intersection of
        development, design, and UX, to resolve problems and challenges for
        end-users, instead of just coding for the sake of coding. I use rapid
        prototyping and prefer to fail fast instead of developing a product that
        nobody is going to use. I implement my ideas using React.js, Gatsby.js,
        Figma, and Adobe XD.
      </p>
      <p>
        My current focus is around accessibility, WCAG, and the legislation
        related to it. My task is to make technology serve human needs, which
        happens often in the opposite way.
      </p>
      <p>
        Feel free to <a href="/contact">contact me</a> with any questions!
      </p>
    </Layout>
  );
};

export default AboutPage;
