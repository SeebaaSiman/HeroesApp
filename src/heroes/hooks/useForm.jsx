import { useState, useCallback } from "react";
export const useForm = (initialForm, options = []) => {
  const [formState, setFormState] = useState(initialForm);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const onInputChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setFormState((prevFormState) => ({
        ...prevFormState,
        [name]: value,
      }));

      // Filtrar las sugerencias según el valor ingresado
      if (value === "") {
        setShowSuggestions(false);
      } else {
        const filteredSuggestions = options.filter((option) =>
          option.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
        setShowSuggestions(true);
      }
    },
    [options]
  );

  const onResetForm = useCallback(() => {
    setFormState(initialForm);
    setSuggestions([]);
    setShowSuggestions(false);
  }, [initialForm]);

  const onSelectSuggestion = useCallback((value) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      searchText: value, // Actualizar el valor del input con la sugerencia seleccionada
    }));
    setShowSuggestions(false);
  }, []);

  return {
    ...formState,
    showSuggestions,
    suggestions,
    onInputChange,
    onResetForm,
    onSelectSuggestion,
  };
};
