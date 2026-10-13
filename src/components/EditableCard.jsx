import { useState } from "react";
import { motion } from "motion/react";

export default function EditableCard({ value, onSave }) {

    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState(value); // brouillon

    const startEditing = () => {

        setDraft(value);
        setIsEditing(true);
    };

    const cancel = () => setIsEditing(false); // pas d'appel à onSave

    const handleSubmit = (e) => {
        e.preventDefault(); // la touche Entrée valide aussi
        const trimmed = draft.trim();
        if (!trimmed) return; // un brouillon vide n'est pas enregistré
        onSave(trimmed); // remontée de la valeur finale au parent
        setIsEditing(false);
    };

    //////////////////////////////////////////////////////////////////////ANIMATION//////////////////////////////////////////////////////////////////////
    const buttonVariants = {
        rest: { scale: 1 },
        hover: {
            scale: 1.1,
            backgroundColor: "white",
            color: "var(--clr-primary)",
            transition: { type: "spring", damping: 10, stiffness: 600 },
        },
        tap: { scale: 0.9 },
    };


    return (
        <div className="">
            {isEditing ? (
                <form onSubmit={handleSubmit} className="flex items-center gap-3">
                    <input
                        type="text"
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        aria-label="Nouvelle valeur"
                        className="flex-1 rounded border px-2 py-1"
                        autoFocus
                    />
                    <button
                        type="submit"
                        className="rounded bg-primary px-3 py-1 text-sm text-white"
                    >
                        Valider
                    </button>
                    <button
                        type="button"
                        onClick={cancel}
                        className="rounded bg-white border border-primary px-3 py-1 text-sm"
                    >
                        Annuler
                    </button>
                </form>
            ) : (
                <div className="flex items-center gap-3">
                    {/* Mode lecture : on affiche value, pas draft */}
                    <span className="flex-1">{value}</span>
                    <motion.button
                        onClick={startEditing}
                        className="rounded bg-primary px-3 py-1 text-sm text-white"
                        variants={buttonVariants}
                        initial="rest"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Modifier
                    </motion.button>
                </div>
            )}
        </div>
    );
}