import {useState} from 'react'

export function usePromise(promise: (resolve: unknown, reject: unknown) => void) {
  return new Promise(promise);
};