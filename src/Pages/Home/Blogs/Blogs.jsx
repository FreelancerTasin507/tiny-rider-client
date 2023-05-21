import useTitle from "../../../../public/useTitle";

const Blogs = () => {
  useTitle('Blog')
  return (
    <div className="container mx-auto px-4 pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="blog-post border-2 border-black rounded-3xl p-5">
          <h2 className="text-lg font-bold mb-4 ">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p className="font-semibold">
            An access token is a short-lived credential that allows a client to
            access protected resources. A refresh token is a long-lived
            credential that can be used to obtain new access tokens. Both tokens
            should be stored securely on the client-side.
          </p>
        </div>
        <div className="blog-post border-2 border-black rounded-3xl p-5">
          <h2 className="text-lg font-bold mb-4 ">
            Compare SQL and NoSQL databases?
          </h2>
          <p className="font-semibold">
            SQL databases are relational databases that use structured query
            language (SQL) to store and retrieve data. NoSQL databases are
            non-relational databases that store data in a variety of ways, such
            as key-value pairs, documents, and graphs.
          </p>
        </div>
        <div className="blog-post border-2 border-black rounded-3xl p-5">
          <h2 className="text-lg font-bold mb-4 ">
            What is express js? What is Nest JS ?
          </h2>
          <p className="font-semibold">
            Express.js is a minimal and flexible Node.js web application
            framework that provides a robust set of features for web and mobile
            applications. <br /> Nest.js is a progressive Node.js framework that
            makes building scalable and enterprise-grade server-side
            applications easier. It combines the best of both worlds: the
            simplicity and expressiveness of JavaScript with the robustness and
            performance of TypeScript.
          </p>
        </div>
        <div className="blog-post border-2 border-black rounded-3xl p-5">
          <h2 className="text-lg font-bold mb-4 ">
            What is MongoDB aggregate and how does it work?
          </h2>
          <p className="font-semibold">
            MongoDB aggregate is a tool that allows you to perform complex
            operations on your data. It works by using a pipeline of stages to
            process your data. Each stage can perform a different operation,
            such as filtering, grouping, or calculating values. The output of
            one stage is passed to the next stage, and so on. The final stage of
            the pipeline returns the results of the aggregation operation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
