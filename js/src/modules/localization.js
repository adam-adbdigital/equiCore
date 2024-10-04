export default function getLocalization(stringKey) {
  if (
    typeof window.EquiCore_screenReaderText === 'undefined' ||
    typeof window.EquiCore_screenReaderText[stringKey] === 'undefined'
  ) {
    // eslint-disable-next-line no-console
    console.error(`Missing translation for ${stringKey}`);
    return '';
  }
  return window.EquiCore_screenReaderText[stringKey];
}
