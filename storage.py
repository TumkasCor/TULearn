import os
import io

class Storage:

    def __init__(self):
        self.data = []
        self.init_lessons()

    def add_data(self, number, name, lesson, code, style):
        self.data.append([number, name, lesson, code, style])

    def sort(self):
        self.data.sort()
    
    def get(self, numberlesson):
        index = -1
        loop = 0
        for x in self.data:
            if x[0] == str(numberlesson):
                index=loop
            else:
                loop+=1
        if index == -1:
            return None
        else:
            return [self.data[index][0], self.data[index][1], self.data[index][2], self.data[index][3], self.data[index][4]]
    
    def get_all(self):
        return self.data

    def init_lessons(self):

        ss = os.listdir('lessons') # Получаем список уроков
        for s in ss:
            s #number directory
            dss = os.listdir(f'lessons/{s}')
            if not 'lesson.les' in dss or not 'code.les' in dss or not 'style.les' in dss:
                print(f"[{s}] Файл урока или файл кода не был найден")
            else:
            
                f1 = io.open(f'lessons/{s}/lesson.les', mode="r", encoding="utf-8")
                lessontemp = ""
                for line in f1:
                    lessontemp+=line

                f2 = io.open(f'lessons/{s}/code.les', mode="r", encoding="utf-8")
                codetemp = ""
                for line in f2:
                    codetemp+=line

                f3 = io.open(f'lessons/{s}/style.les', mode="r", encoding="utf-8")
                styletemp = ""
                for line in f3:
                    styletemp+=line


                self.add_data(s, lessontemp, lessontemp.split('\n')[0], codetemp, styletemp)
                self.sort()
                print(f"[{s}] Loaded!")