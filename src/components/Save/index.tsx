import { useState, useCallback, FormEvent } from "react";
import Sticker from "../Sticker";

const Saver = () => {
  const [value, setValue] = useState<string>();
  const datas: any = [];
  const [data, setNewData] = useState(datas);
  const [edit, setEdit] = useState(false);

  const handleOnChange = useCallback((e: FormEvent<HTMLInputElement> | any) => {
    setValue(e.target.value);
  }, []);
  const handlerSave = useCallback(() => {
    let i;
    if (value == null) {
      return false;
    }
    for (i = 1; i <= data.length; i++);
    let newArray = {
      id: i,
      text: value,
    };
    data.push(newArray);
    setValue("");
    setEdit(false);
  }, [value, data]);

  const handleDelete = useCallback(
    (id: number) => {
      if (edit) {
        return false;
      }
      const newData = data.filter((i: any) => i.id !== id);
      setNewData(newData);
    },
    [data, edit]
  );

  const handleCopy = useCallback(
    (id: string) => {
      data.map((i: any) => {
        if (i.id === id) {
          setEdit(true);
          setValue(i.text);
        }
      });
    },
    [data]
  );

  return (
    <>
      <input type="text" onChange={handleOnChange} value={value} />
      <button type="button" onClick={handlerSave}>
        Save
      </button>
      <div className="container">
        {data.map((r: any) => (
          <Sticker
            key={r.id}
            text={r.text}
            onDelete={() => handleDelete(r.id)}
            onCopy={() => handleCopy(r.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Saver;
