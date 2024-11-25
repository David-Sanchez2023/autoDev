import { useFormContext } from "react-hook-form";
import {
  Combobox,
  ComboboxChevron,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxField,
  ComboboxGroup,
  ComboboxIcon,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@ingenieria-digital/medicatel-ui/components";

// Components
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Types
import type { ListItem } from "node_modules/@ingenieria-digital/medicatel-ui/dist/src/lib/types";

interface ComboboxFieldType {
  name: string;
  title?: string;
  placeholder: string;
  data: ListItem[];
}

interface CustomComboboxType {
  selected: ListItem | null;
  setSelected: (value: ListItem | null) => void;
  data: ComboboxFieldType;
}

export function ComboboxCustom(props: ComboboxFieldType) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="text-white">{props.title || ""}</FormLabel>

          <FormControl>
            <CustonCombobox
              selected={field.value}
              setSelected={field.onChange}
              data={props}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function CustonCombobox(props: CustomComboboxType) {
  return (
    <Combobox
      mode="single"
      selected={props.selected}
      setSelected={props.setSelected}
    >
      <ComboboxTrigger>
        <ComboboxField>
          <ComboboxValue placeholder={props.data.placeholder} />
          <ComboboxIcon>
            <ComboboxChevron />
          </ComboboxIcon>
        </ComboboxField>
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No se encontraron resultados.</ComboboxEmpty>
          <ComboboxGroup options={props.data.data}>
            {(selectable) => (
              <ComboboxItem item={selectable}>{selectable.label}</ComboboxItem>
            )}
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
