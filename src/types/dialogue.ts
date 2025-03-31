export interface DialogueLine {
  japanese: string;
  vietnamese: string;
}

export interface ExtractDialogueResponse {
  dialogue: DialogueLine[];
}

export interface ExtractDialogueRequest {
  url: string;
} 