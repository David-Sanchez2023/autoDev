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
  ComboboxTags,
  ComboboxTrigger,
  ComboboxValue,
  Tag,
} from "@ingenieria-digital/medicatel-ui/components";

// Component
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

// Types
import type { ListItem } from "node_modules/@ingenieria-digital/medicatel-ui/dist/src/lib/types";

interface ComboboxMultipleFieldType {
  name: string;
  title: string;
  placeholder: string;
  data: ListItem[];
  disabled?: boolean;
}
export function ComboboxMultipleField(props: ComboboxMultipleFieldType) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white">{props.title}:</FormLabel>
          <div className="relative">
            <FormControl>
              <CustonCombobox
                selected={field.value}
                setSelected={field.onChange}
                data={props.data}
                placeholder={props.placeholder}
                disabled={props.disabled}
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

interface CustonComboboxType {
  selected: ListItem[];
  setSelected: (value: ListItem[]) => void;
  data: ListItem[];
  placeholder: string;
  disabled?: boolean;
}

function CustonCombobox(props: CustonComboboxType) {
  return (
    <Combobox
      mode="multiple"
      selected={props.selected}
      setSelected={props.setSelected}
      maxDisplayed={5}
    >
      <ComboboxTrigger disabled={props.disabled || false}>
        <ComboboxTags>
          {({ item, key, ...props }) => (
            <Tag {...props} key={key}>
              {item.label}
            </Tag>
          )}
        </ComboboxTags>
        <ComboboxField>
          <ComboboxValue placeholder="Seleccione las columnas" />
          <ComboboxIcon>
            <ComboboxChevron />
          </ComboboxIcon>
        </ComboboxField>
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No se encontraron resultados.</ComboboxEmpty>
          <ComboboxGroup options={props.data}>
            {(selectable) => (
              <ComboboxItem item={selectable}>{selectable.label}</ComboboxItem>
            )}
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
