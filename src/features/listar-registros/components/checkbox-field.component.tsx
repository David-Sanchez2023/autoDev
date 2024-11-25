import { useFormContext } from "react-hook-form";
import { Checkbox, Label } from "@ingenieria-digital/medicatel-ui/components";

// Components
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

interface CheckBoxFieldType {
  name: string;
  text: string;
  onClick?: () => void;
}

export function CheckBoxField({ name, text, onClick }: CheckBoxFieldType) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="relative">
            <FormControl>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  data-testid="checkbox"
                  checked={field.value}
                  onCheckedChange={(valueChecked) => {
                    field.onChange(valueChecked);
                  }}
                  onClick={onClick}
                />
                <Label htmlFor="terms" className="text-white">
                  {text}
                </Label>
              </div>
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
