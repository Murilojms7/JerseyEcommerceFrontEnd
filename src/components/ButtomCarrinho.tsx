'use client'

import { Button, cn, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { ChevronDown, Pencil, Trash } from "lucide-react";
import { MouseEventHandler } from 'react'
import Carrinho from "./Carrinho";

export default function ButtomCarrinho() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
        >
          <ChevronDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu >
        <DropdownItem
          key="edit"
          onClick={Carrinho}
          startContent={<Pencil size={700} className={iconClasses} />}

          >
          <Carrinho/>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
