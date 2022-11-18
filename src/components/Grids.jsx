import React from "react";

import Grid from "@mui/material/Grid";

function Grids() {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4} >
          <div className="flex flex-col w-full gap-8">
            <div className="rounded-xl shadow-2xl bg-[#F46445] h-12">
              Grid 1
            </div>
            <div className=" bg-[#43C0CC] h-12 rounded-xl shadow-2xl">
              Grid 2
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="flex flex-wrap w-full gap-8  justify-between">
            <div className="w-[46%] h-12 bg-[#F46445] rounded-xl shadow-2xl">
              yoo
            </div>
            <div className="w-[46%] h-12 bg-[#F46445] rounded-xl shadow-2xl">
              yoo
            </div>{" "}
            <div className="w-[46%] h-12 bg-[#F46445] rounded-xl shadow-2xl">
              yoo
            </div>{" "}
            <div className="w-[46%] h-12 bg-[#F46445] rounded-xl shadow-2xl">
              yoo
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="flex  w-full gap-8  justify-between">
            <div className="w-[45%] h-32 bg-[#F46445] rounded-xl shadow-2xl">
              yoo
            </div>
            <div className="w-[45%] h-32 bg-[#F46445] rounded-xl shadow-2xl">
              yoo
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Grids;
