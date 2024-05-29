// Assuming Power is an existing type with an 'age' and 'dept' property
type Power = {
  age: number;
  dept: string;
  // ... other properties
};

// Extracts the types of 'age' and 'dept' properties from Power
type AgeDept = Pick<Power, 'age' | 'dept'>;

// Usage example
const person: AgeDept = {
  age: 25,
  dept: 'Engineering'
};
