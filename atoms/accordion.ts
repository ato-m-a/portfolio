import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

const accordionFamily = atomFamily((id: symbol) => atom<boolean>(false));

export default accordionFamily;
