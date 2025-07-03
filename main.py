import tkinter as tk
from tkinter import messagebox
import pandas as pd
import random

# Wczytaj pytania
df = pd.read_excel("testownik_ISO_100_ABCD_FINAL_VERIFIED.xlsx")
questions = df.to_dict("records")
random.shuffle(questions)

class QuizApp:
    def __init__(self, master):
        self.master = master
        self.master.title("Testownik – Windows Server")
        self.master.geometry("820x500")
        self.master.configure(bg="#f2f2f2")

        self.correct_count = 0
        self.incorrect_count = 0
        self.current = -1
        self.buttons = {}

        # Etykieta pytania
        self.question_label = tk.Label(master, text="", wraplength=780, font=("Segoe UI", 14), justify="left", bg="#f2f2f2")
        self.question_label.pack(pady=20)

        # Ramka na przyciski
        self.button_frame = tk.Frame(master, bg="#f2f2f2")
        self.button_frame.pack()

        for key in ["A", "B", "C", "D"]:
            btn = tk.Button(self.button_frame, text="", width=95, anchor="w", font=("Segoe UI", 11),
                            command=lambda k=key: self.check_answer(k), relief="ridge", bd=2)
            btn.pack(pady=4)
            self.buttons[key] = btn

        # Etykieta feedbacku
        self.feedback_label = tk.Label(master, text="", font=("Segoe UI", 12, "bold"), bg="#f2f2f2")
        self.feedback_label.pack(pady=10)

        # Liczniki
        self.counter_label = tk.Label(master, text="✅ 0 | ❌ 0", font=("Segoe UI", 11), bg="#f2f2f2")
        self.counter_label.pack()

        # Przycisk następnego pytania
        self.next_button = tk.Button(master, text="Następne pytanie", command=self.next_question,
                                     font=("Segoe UI", 11), bg="#e0e0e0", relief="groove")
        self.next_button.pack(pady=10)

        self.next_question()

    def update_counters(self):
        self.counter_label.config(text=f"✅ {self.correct_count} | ❌ {self.incorrect_count}")

    def next_question(self):
        self.current += 1
        if self.current >= len(questions):
            messagebox.showinfo("Koniec", f"To już wszystkie pytania!\nPoprawne: {self.correct_count}, Błędne: {self.incorrect_count}")
            self.master.quit()
            return

        self.feedback_label.config(text="")
        q = questions[self.current]
        self.question_label.config(text=f"Pytanie {self.current+1}: {q['question']}")
        for k in ["A", "B", "C", "D"]:
            self.buttons[k].config(text=f"{k}. {q[k]}", bg="#f0f0f0", state="normal")

    def check_answer(self, selected):
        correct = questions[self.current]["correct"]
        for k in ["A", "B", "C", "D"]:
            self.buttons[k].config(state="disabled")
            if k == correct:
                self.buttons[k].config(bg="#b6f7b0")  # zielony
            elif k == selected:
                self.buttons[k].config(bg="#f7b0b0")  # czerwony

        if selected == correct:
            self.feedback_label.config(text="✅ Dobrze!", fg="green")
            self.correct_count += 1
        else:
            self.feedback_label.config(text=f"❌ Błąd! Poprawna odpowiedź to: {correct}", fg="red")
            self.incorrect_count += 1

        self.update_counters()

if __name__ == "__main__":
    root = tk.Tk()
    app = QuizApp(root)
    root.mainloop()
