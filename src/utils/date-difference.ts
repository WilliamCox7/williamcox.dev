type Unit = 'mil';
type D = Date;

const dateDifference = (d1: D, d2: D, unit: Unit): number => {
  switch(unit) {
    case 'mil': return getMilliseconds(d1, d2)
  }
}

const getMilliseconds = (d1: D, d2: D): number => {
  return d1.getTime() - d2.getTime();
}

export default dateDifference;