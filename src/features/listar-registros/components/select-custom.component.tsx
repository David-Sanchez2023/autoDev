import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectChevron,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ingenieria-digital/medicatel-ui/components";
import type { ListItem } from "node_modules/@ingenieria-digital/medicatel-ui/dist/src/lib/types";
import { useFormContext } from "react-hook-form";

interface CustomSelectType {
  name: string;
  title?: string;
  placeholder: string;
  data: ListItem[];
}

export function CustomSelect(props: CustomSelectType) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className=" w-full">
          <FormLabel className="text-white">{props.title || ""}</FormLabel>
          <FormControl>
            <SelectField
              value={field.value}
              onValueChange={field.onChange}
              data={props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

interface SelectFieldType {
  value: string;
  onValueChange: (value: string) => void;
  data: CustomSelectType;
}

function SelectField(props: SelectFieldType) {
  return (
    <Select
      value={props.value}
      onValueChange={(value) => props.onValueChange(value)}
    >
      <SelectTrigger>
        <SelectValue placeholder={props.data.placeholder} />
        <SelectIcon>
          <SelectChevron />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent>
        {props.data.data.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
