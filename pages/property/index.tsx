import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import { NextPage } from "next";
import { useState } from "react";
import Filter from "@/libs/components/propertypage/Filter";
import PropertyCard from "@/libs/components/propertypage/PropertyCard";


const PropertyList: NextPage = () => {
  const [propertyList, setPropertyList] = useState<number[]>([
    1, 2, 3, 4, 5, 6,
  ]);

  return (
    <div id={"property-list-page"}>
      <Stack className={"container"}>
        <Box className={"right"}>
          <span>Sory by</span>
          <div>
            <Button endIcon={<KeyboardArrowDownRoundedIcon />}>New</Button>
          </div>
        </Box>
        <Stack className={"property-page"}>
          <Stack className="filter-config">
            <Filter />
          </Stack>
          <Stack className="main-config" mb={"76px"}>
            <Stack className="list-config">
              {propertyList.map((property, index) => {
                return <PropertyCard key={index} />;
              })}
            </Stack>
          </Stack>
          <Stack className="pagination-config">
            <Stack className="pagination-box">
              <Pagination page={1} count={5} shape="circular" color="primary" />
            </Stack>
            <Stack className="total-result">
              <Typography>Total 5 preporties avaible</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default withLayoutBasic(PropertyList);
