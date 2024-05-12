interface subSkill {
    id: number;
    created_at: string | null; // Assuming dates are stored as ISO strings, nullable based on your schema
    updated_at: string | null; // Same assumption as above
    icon: string;              // Assuming icon field contains a string, like a URL or class name
    skill_text: string;        // Plain text field
    table_num: number;         // Integer field, perhaps referencing another table or as a category identifier
    position: number;          // Integer used to define the order or position
}


export type { subSkill };