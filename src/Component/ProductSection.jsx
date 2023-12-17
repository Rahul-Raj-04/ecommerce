import Card from "./Card/Card";
function ProductSection() {
  const data = [
    {
      arrayimg:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJAnc79MJIcoLPIZuQNSkUt2tMnmhkvfKtesl9kSD8JvyURsMi32-UNy3kROR7X8kgn6EAhhV_TdhHJ6KIjgYwSRtJmkwZoybMfPBedHFQx6M8mbaOc2HUuA&usqp=CAE",
      arraytitle: "Apple",
      arraydis:
        "This is a longer card with supporting text below as a naturlead-in to additional content. This content is a little bitlonger.",
      arrayPrice: "250rs",
    },
    {
      arrayimg:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTemXVL0IiPjVRyVjQlTtiSQHiA1Z59BXXieh8BpVFRTwhSp2X1Sm_ieCwtyOG8dX6Ard7zL-lHYQvSJ-rD-SZKgJ2kOXiG6L8fzEuLo5EtUWhfm9cBW4md&usqp=CAE",
      arraytitle: "Orange",
      arraydis:
        "This is a longer card with supporting text below as a naturlead-in to additional content. This content is a little bitlonger.",
      arrayPrice: "350rs",
    },
    {
      arrayimg:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQGkRLaUF11yq6YD4BQAP104C9qx1XY3jNBO8B9vWCzfextvzKJTHMLHfC4TjEERb41R8oHIziuPNKgbTazMwkdbHOaPRoivllCcR9th17JuuJeR0QkyNy3&usqp=CAE",
      arraytitle: "DEmo",
      arraydis:
        "This is a longer card with supporting text below as a naturlead-in to additional content. This content is a little bitlonger.",
      arrayPrice: "450rs",
    },
    {
      arrayimg:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7YkIg10rcfPzZ06lVr21BMsrKUeksNRkbzZLEET9BmbZD6VPMH7YVvKI_gfwLfFFdKGXY9b9S1FZrFz0E-tQa3bco_4oBzdxLCM8sc3vKLI93CnhVsJcohw&usqp=CAE",
      arraytitle: "Narangi",
      arraydis:
        "This is a longer card with supporting text below as a naturlead-in to additional content. This content is a little bitlonger.",
      arrayPrice: "550rs",
    },
    {
      arrayimg:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxzKg1H861_rVii0Jq-W57VKHUhYJCdAexUtPftjwp4g03XxlouTetTOINGLxNm3S2Sn0_DnnmAkkeP7V7s-EbuBtMym0g01kGQIu9v-iNSsN2n44H-yNeEQ&usqp=CAE",
      arraytitle: "Mango",
      arraydis:
        "This is a longer card with supporting text below as a naturlead-in to additional content. This content is a little bitlonger.",
      arrayPrice: "650rs",
    },
  ];
  return (
    <>
      <div className=" w-[600x] h-auto  flex justify-center items-center flex-col ">
        <h1 className=" flex justify-center text-[46px] text-black font-bold mt-8">
          Trend Products
        </h1>
        <p className=" mb-[20px] mt-[15px]">
          The new collection of modern design
        </p>
        <div className=" w-[90%] h-[auto]  mb-4 ">
          <div className=" flex flex-row justify-between flex-wrap pt-[20px] gap-4">
            {data.map((d, index) => (
              <Card
                key={index}
                title={d.arraytitle}
                Image={d.arrayimg}
                desc={d.arraydis}
                price={d.arrayPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSection;
