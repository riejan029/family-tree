export interface FamilyMemberList {
    id:number,
    name:string,
    familyChild:FamilyMemberList[],
    position:string,
    description:string
}

export interface ChildrenProps {
    familyChild:FamilyMemberList[];
    updateChild:(childKey:number) => void
}