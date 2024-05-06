import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import { tamanho } from "../utils/tamanho";


export default function AutoCompleteTamanho() {
return(
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 font-bold text-slate-950">
      <Autocomplete
        label="Tamanho"
        placeholder="Escolha..."
        className="max-w-xs"
        variant="bordered"
        labelPlacement="outside"
        defaultItems={tamanho}
        name="tamanho"
      >
        {(item) => <AutocompleteItem className={"bg-slate-800"} key={item.name}>
            {item.name}
        </AutocompleteItem>}
      </Autocomplete>
    </div>
    )
}