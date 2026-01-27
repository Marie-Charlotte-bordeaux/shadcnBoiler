import * as React from "react"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "@/components/ui/combobox"

/**
 * Composant Combobox multi-tags.
 * @param {Array} options - liste des tags disponibles
 * @param {Array} value - tags sélectionnés
 * @param {Function} onChange - callback pour mettre à jour la sélection
 */
export function TagsCombobox({ options = [], value = [], onChange }) {
  return (
    <Combobox
      items={options}      // ← ici tu mets tes tags uniques
      multiple
      autoHighlight
      value={value}
      onValueChange={onChange} // ← met à jour la sélection dans ton parent
    >
      <ComboboxChips>
        <ComboboxValue>
          {value.map((item) => (
            <ComboboxChip key={item}>{item}</ComboboxChip>
          ))}
        </ComboboxValue>
        <ComboboxChipsInput placeholder="Filtrer par tag…" />
      </ComboboxChips>

      <ComboboxContent>
        <ComboboxEmpty>Aucun tag trouvé.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
