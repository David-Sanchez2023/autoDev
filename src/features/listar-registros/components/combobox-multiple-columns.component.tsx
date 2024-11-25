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

// Utils
import { TABLES } from "@/utils";

export function SelectColumnField({ name }: { name: string }) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white">Columnas:</FormLabel>
          <div className="relative">
            <FormControl>
              <CustonCombobox
                selected={field.value}
                setSelected={field.onChange}
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
}

function CustonCombobox(props: CustonComboboxType) {
  const data = TABLES.flatMap((table) =>
    table.columns.map((column) => ({
      label: column,
      value: column,
    })),
  );
  
  return (
    <Combobox
      mode="multiple"
      selected={props.selected}
      setSelected={props.setSelected}
      maxDisplayed={5}
    >
      <ComboboxTrigger>
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
          <ComboboxGroup options={data}>
            {(selectable) => (
              <ComboboxItem item={selectable}>{selectable.label}</ComboboxItem>
            )}
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
