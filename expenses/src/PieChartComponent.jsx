import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { legendClasses } from "@mui/x-charts/ChartsLegend";
import Snackbar from "@mui/joy/Snackbar";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Stack from "@mui/joy/Stack";

const otherProps = {
  width: 700,
  height: 400,
  sx: {
    [`.${legendClasses.root}`]: {
      transform: "translate(20px, 0)",
    },
  },
};

const categories = [
  { id: "foodAndDrinks", label: "Food & Drinks", value: 0 },
  { id: "financialExpenses", label: "Financial Expenses", value: 0 },
  { id: "Housing", label: "Housing", value: 0 },
  { id: "vehicle", label: "Vehicle", value: 0 },
  { id: "lifeAndEntertainment", label: "Life & Entertainment", value: 0 },
  { id: "shopping", label: "Shopping", value: 0 },
  { id: "health", label: "Health", value: 0 },
  { id: "hobbies", label: "Hobbies", value: 0 },
];

const PieChartComponent = () => {
  const [data, setData] = React.useState(categories);
  const [category, setCategory] = React.useState(categories[0].id);
  const [inputValue, setInputValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (_, value) => {
    setCategory(value);
  };

  const handleSaveClick = () => {
    const amount = parseFloat(inputValue) || 0;
    setData((prevData) =>
      prevData.map((d) =>
        d.id === category ? { ...d, value: d.value + amount } : d
      )
    );
    setInputValue("");
    setOpen(true);
  };

  return (
    <>
      <PieChart
        series={[
          {
            data: data.map((d) => ({
              label: d.label,
              id: d.id,
              value: d.value,
            })),
            valueFormatter: (v) => `${v.value}`,
          },
        ]}
        {...otherProps}
      />

      <Stack spacing={1.5}>
        <Input
          placeholder="Amount"
          value={inputValue}
          onChange={handleInputChange}
          endDecorator={
            <React.Fragment>
              <Divider orientation="vertical" />
              <Select
                variant="plain"
                value={category}
                onChange={handleSelectChange}
                slotProps={{
                  listbox: {
                    variant: "outlined",
                  },
                }}
                sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
              >
                {categories.map((c) => (
                  <Option key={c.id} value={c.id}>
                    {c.label}
                  </Option>
                ))}
              </Select>
            </React.Fragment>
          }
          sx={{ width: 300 }}
        />
      </Stack>
      <Button variant="outlined" onClick={handleSaveClick}>
        Save
      </Button>
      <Snackbar
        variant="soft"
        color="success"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        Expenses saved successfully!
      </Snackbar>
    </>
  );
};

export default PieChartComponent;
