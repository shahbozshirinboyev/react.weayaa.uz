import React, { forwardRef } from "react";

const Home = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center text-white bg-[url('https://images.unsplash.com/photo-1577486092199-0dc5dd2e40a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4">Welcome to WEAYAA</h1>
        <p className="text-3xl font-bold text-green-300">
          Global Contents Development Company
        </p>
        <p className="text-xl mx-32 my-4 font-semibold">WeaYaa is the best content development company in Uzbekistan. We are located in Korea and Uzbekistan, and we are developing all visual contents (games, animations, movies, interiors, architecture, products, promotions) with the best effort. We aim to become a global company that leads the market based on constant challenge and beautiful sense.</p>
      </div>
    </section>
  );
});

export default Home;
