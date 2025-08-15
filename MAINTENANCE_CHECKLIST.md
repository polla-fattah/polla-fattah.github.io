# 🔧 Maintenance Checklist

## 📝 **When Adding a New Student:**

1. **Create student file** in `_students/student-name.md`
2. **Add cross-reference fields** with helpful comments:
   ```yaml
   research_projects: []  # Add project IDs when assigned
   publications: []       # Add publication IDs when published
   ```
3. **Update research files** where student is assigned:
   - Add student ID to `students: []` array
   - Add helpful comment about the student

## 🔬 **When Adding a New Research Project:**

1. **Create research file** in `_researches/YYYY-MM-DD-project-name.md`
2. **Add cross-reference fields** with helpful comments:
   ```yaml
   students: []           # Add student IDs when assigned
   publications: []       # Add publication IDs when published
   ```
3. **Update student files** assigned to this project:
   - Add project ID to `research_projects: []` array
   - Add helpful comment about the project

## 📚 **When Adding a New Publication:**

1. **Create publication file** in `_publications/YYYY-MM-DD-publication-name.md`
2. **Add cross-reference fields** with helpful comments:
   ```yaml
   name: "publication-id"  # Unique identifier for cross-referencing (lowercase, hyphens)
   students: []           # Add student author IDs
   research_projects: []  # Add related research project IDs
   ```
3. **Update student files** who authored this paper:
   - Add publication ID to `publications: []` array
   - Add helpful comment about the publication
4. **Update research files** this publication came from:
   - Add publication ID to `publications: []` array
   - Add helpful comment about the publication

## 🔄 **When Updating Relationships:**

### **Student Joins a Project:**
- ✅ Add student ID to research file's `students: []`
- ✅ Add project ID to student file's `research_projects: []`

### **Student Publishes a Paper:**
- ✅ Add student ID to publication file's `students: []`
- ✅ Add publication ID to student file's `publications: []`
- ✅ Add publication ID to research file's `publications: []` (if applicable)

### **Project Produces a Publication:**
- ✅ Add publication ID to research file's `publications: []`
- ✅ Add research ID to publication file's `research_projects: []`
- ✅ Add publication ID to all student files' `publications: []` (if applicable)

## 🆔 **ID Naming Convention:**

- **Student IDs**: lowercase, no spaces (e.g., `"aveen"`, `"bnar"`)
- **Research IDs**: filename without extension (e.g., `"2023-02-10-autism-detection"`)
- **Publication IDs**: use the `name` field (e.g., `"tokenisation-free-machine-translation-kurdish-byt5"`)

## ✅ **Validation Checklist:**

After making changes, check:
- [ ] All student IDs exist in `_students/` folder
- [ ] All research IDs exist in `_researches/` folder  
- [ ] All publication IDs exist in `_publications/` folder
- [ ] Cross-references are consistent (if A links to B, B should link to A)
- [ ] No broken links in the generated site

## 🚨 **Common Mistakes to Avoid:**

- ❌ Using display names instead of IDs
- ❌ Forgetting to update both sides of a relationship
- ❌ Typos in IDs (case-sensitive!)
- ❌ Adding IDs that don't exist
- ❌ Forgetting to add helpful comments

## 💡 **Pro Tips:**

1. **Use the helpful comments** in front matter as reminders
2. **Check the generated site** after making changes
3. **Keep IDs consistent** across all files
4. **Update relationships immediately** when changes occur
5. **Use the cross-references include** in templates for automatic linking

---

*This checklist helps maintain consistency across your academic website. Update it as your workflow evolves!*
